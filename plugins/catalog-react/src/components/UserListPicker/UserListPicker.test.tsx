/*
 * Copyright 2021 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import { fireEvent, render, waitFor, screen } from '@testing-library/react';
import { UserEntity } from '@backstage/catalog-model';
import { UserListPicker, UserListPickerProps } from './UserListPicker';
import { MockEntityListContextProvider } from '../../testUtils/providers';
import {
  EntityKindFilter,
  EntityNamespaceFilter,
  EntityTagFilter,
  EntityUserFilter,
} from '../../filters';
import {
  CatalogApi,
  QueryEntitiesInitialRequest,
} from '@backstage/catalog-client';
import { catalogApiRef } from '../../api';
import { MockStorageApi, TestApiRegistry } from '@backstage/test-utils';
import { ApiProvider } from '@backstage/core-app-api';
import {
  ConfigApi,
  configApiRef,
  IdentityApi,
  identityApiRef,
  storageApiRef,
} from '@backstage/core-plugin-api';
import { MockStarredEntitiesApi, starredEntitiesApiRef } from '../../apis';
import { DefaultEntityFilters } from '../../hooks';

const mockUser: UserEntity = {
  apiVersion: 'backstage.io/v1alpha1',
  kind: 'User',
  metadata: {
    namespace: 'default',
    name: 'testUser',
  },
  spec: {
    memberOf: [],
  },
};

const mockConfigApi = {
  getOptionalString: () => 'Test Company',
} as Partial<ConfigApi>;

const mockCatalogApi = {
  getEntityByRef: jest.fn(),
  queryEntities: jest.fn(),
} as Partial<jest.Mocked<CatalogApi>>;

const mockIdentityApi = {
  getBackstageIdentity: jest.fn(),
} as Partial<jest.Mocked<IdentityApi>>;

const mockStarredEntitiesApi = new MockStarredEntitiesApi();

const apis = TestApiRegistry.from(
  [configApiRef, mockConfigApi],
  [catalogApiRef, mockCatalogApi],
  [identityApiRef, mockIdentityApi],
  [storageApiRef, MockStorageApi.create()],
  [starredEntitiesApiRef, mockStarredEntitiesApi],
);

const ownershipEntityRefs = ['user:default/testuser'];
describe('<UserListPicker />', () => {
  const mockQueryEntitiesImplementation: CatalogApi['queryEntities'] =
    async request => {
      if (
        (
          (request as QueryEntitiesInitialRequest).filter as Record<
            string,
            string
          >
        )['relations.ownedBy']
      ) {
        // owned entities
        return { items: [], totalItems: 3, pageInfo: {} };
      }
      if (
        (
          (request as QueryEntitiesInitialRequest).filter as Record<
            string,
            string
          >
        )['metadata.name']
      ) {
        // starred entities
        return {
          items: [
            {
              apiVersion: '1',
              kind: 'component',
              metadata: { name: 'e-1', namespace: 'default' },
            },
            {
              apiVersion: '1',
              kind: 'component',
              metadata: { name: 'e-2', namespace: 'default' },
            },
          ],
          totalItems: 2,
          pageInfo: {},
        };
      }
      // all items
      return { items: [], totalItems: 10, pageInfo: {} };
    };

  beforeAll(() => {
    mockStarredEntitiesApi.toggleStarred('component:default/e-1');
    mockStarredEntitiesApi.toggleStarred('component:default/e-2');
  });

  beforeEach(() => {
    mockCatalogApi.getEntityByRef?.mockResolvedValue(mockUser);
    mockIdentityApi.getBackstageIdentity?.mockResolvedValue({
      ownershipEntityRefs,
      type: 'user',
      userEntityRef: 'user:default/testuser',
    });

    mockCatalogApi.queryEntities?.mockImplementation(
      mockQueryEntitiesImplementation,
    );
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('renders filter groups', async () => {
    render(
      <ApiProvider apis={apis}>
        <MockEntityListContextProvider value={{}}>
          <UserListPicker />
        </MockEntityListContextProvider>
      </ApiProvider>,
    );

    await waitFor(() =>
      expect(mockIdentityApi.getBackstageIdentity).toHaveBeenCalled(),
    );
    await waitFor(() =>
      expect(mockCatalogApi.queryEntities).toHaveBeenCalled(),
    );
    expect(screen.getByText('Personal')).toBeInTheDocument();
    expect(screen.getByText('Test Company')).toBeInTheDocument();
  });

  it('renders filters', async () => {
    render(
      <ApiProvider apis={apis}>
        <MockEntityListContextProvider
          value={{
            filters: { namespace: new EntityNamespaceFilter(['default']) },
          }}
        >
          <UserListPicker />
        </MockEntityListContextProvider>
      </ApiProvider>,
    );

    await waitFor(() =>
      expect(mockIdentityApi.getBackstageIdentity).toHaveBeenCalled(),
    );
    await waitFor(() =>
      expect(
        screen.getAllByRole('menuitem').map(({ textContent }) => textContent),
      ).toEqual(['Owned 3', 'Starred 2', 'All 10']),
    );

    expect(mockCatalogApi.queryEntities).toHaveBeenCalledWith({
      filter: {
        'metadata.namespace': ['default'],
      },
      limit: 0,
    });
    expect(mockCatalogApi.queryEntities).toHaveBeenCalledWith({
      filter: {
        'metadata.namespace': ['default'],
        'relations.ownedBy': ['user:default/testuser'],
      },
      limit: 0,
    });
    expect(mockCatalogApi.queryEntities).toHaveBeenCalledWith({
      filter: {
        'metadata.namespace': ['default'],
        'metadata.name': ['e-1', 'e-2'],
      },
      limit: 1000,
    });
  });

  it('respects other frontend filters in counts', async () => {
    render(
      <ApiProvider apis={apis}>
        <MockEntityListContextProvider
          value={{
            filters: { tags: new EntityTagFilter(['tag1']) },
          }}
        >
          <UserListPicker />
        </MockEntityListContextProvider>
      </ApiProvider>,
    );

    await waitFor(() => {
      expect(
        screen.getAllByRole('menuitem').map(({ textContent }) => textContent),
      ).toEqual(['Owned 3', 'Starred 2', 'All 10']);
    });

    expect(mockCatalogApi.queryEntities).toHaveBeenCalledWith({
      filter: { 'metadata.tags': ['tag1'] },
      limit: 0,
    });
    expect(mockCatalogApi.queryEntities).toHaveBeenCalledWith({
      filter: { 'metadata.name': ['e-1', 'e-2'], 'metadata.tags': ['tag1'] },
      limit: 1000,
    });
    expect(mockCatalogApi.queryEntities).toHaveBeenCalledWith({
      filter: {
        'relations.ownedBy': ['user:default/testuser'],
        'metadata.tags': ['tag1'],
      },
      limit: 0,
    });
  });

  it('respects the query parameter filter value', async () => {
    const updateFilters = jest.fn();
    const queryParameters = { user: 'owned', kind: 'component' };
    render(
      <ApiProvider apis={apis}>
        <MockEntityListContextProvider
          value={{
            updateFilters,
            queryParameters,
            filters: { kind: new EntityKindFilter('component') },
          }}
        >
          <UserListPicker />
        </MockEntityListContextProvider>
      </ApiProvider>,
    );
    await waitFor(() =>
      expect(mockIdentityApi.getBackstageIdentity).toHaveBeenCalled(),
    );

    await waitFor(() =>
      expect(updateFilters).toHaveBeenLastCalledWith({
        user: EntityUserFilter.owned(ownershipEntityRefs),
      }),
    );

    expect(mockCatalogApi.queryEntities).toHaveBeenCalledWith({
      filter: { kind: 'component' },
      limit: 0,
    });
    expect(mockCatalogApi.queryEntities).toHaveBeenCalledWith({
      filter: { kind: 'component', 'metadata.name': ['e-1', 'e-2'] },
      limit: 1000,
    });
    expect(mockCatalogApi.queryEntities).toHaveBeenCalledWith({
      filter: {
        kind: 'component',
        'relations.ownedBy': ['user:default/testuser'],
      },
      limit: 0,
    });
  });

  it('updates user filter when a menuitem is selected', async () => {
    const updateFilters = jest.fn();
    render(
      <ApiProvider apis={apis}>
        <MockEntityListContextProvider
          value={{
            updateFilters,
            filters: { kind: new EntityKindFilter('component') },
          }}
        >
          <UserListPicker />
        </MockEntityListContextProvider>
      </ApiProvider>,
    );

    fireEvent.click(screen.getByText('Starred'));

    // wait until the component has finished loading
    await waitFor(() => {
      expect(mockCatalogApi.queryEntities).toHaveBeenCalledWith({
        filter: { kind: 'component', 'metadata.name': ['e-1', 'e-2'] },
        limit: 1000,
      });
      expect(mockCatalogApi.queryEntities).toHaveBeenCalledWith({
        filter: { kind: 'component' },
        limit: 0,
      });
      expect(mockCatalogApi.queryEntities).toHaveBeenCalledWith({
        filter: {
          kind: 'component',
          'relations.ownedBy': ['user:default/testuser'],
        },
        limit: 0,
      });
    });

    await waitFor(() =>
      expect(updateFilters).toHaveBeenLastCalledWith({
        user: EntityUserFilter.starred([
          'component:default/e-1',
          'component:default/e-2',
        ]),
      }),
    );
  });

  it('responds to external queryParameters changes', async () => {
    const updateFilters = jest.fn();
    const rendered = render(
      <ApiProvider apis={apis}>
        <MockEntityListContextProvider
          value={{
            updateFilters,
            queryParameters: { user: ['all'], kind: 'component' },
            filters: {
              kind: new EntityKindFilter('component'),
              user: undefined,
            },
          }}
        >
          <UserListPicker />
        </MockEntityListContextProvider>
      </ApiProvider>,
    );

    await waitFor(() =>
      expect(mockIdentityApi.getBackstageIdentity).toHaveBeenCalled(),
    );

    await waitFor(() =>
      expect(updateFilters).toHaveBeenLastCalledWith({
        user: EntityUserFilter.all(),
      }),
    );

    rendered.rerender(
      <ApiProvider apis={apis}>
        <MockEntityListContextProvider
          value={{
            updateFilters,
            queryParameters: { user: ['owned'], kind: 'component' },
            filters: {
              kind: new EntityKindFilter('component'),
              user: undefined,
            },
          }}
        >
          <UserListPicker />
        </MockEntityListContextProvider>
      </ApiProvider>,
    );
    expect(updateFilters).toHaveBeenLastCalledWith({
      user: EntityUserFilter.owned(ownershipEntityRefs),
    });
  });
});
