import React from 'react';
import { Admin, Resource, List, Edit, Create, SimpleForm, TextInput, Datagrid, TextField, EditButton, RichTextField } from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('http://localhost:6800');

const RegionList = (props: React.PropsWithChildren) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" /> 
      <TextField source="title" />
      <RichTextField source="body"  />
      <EditButton />
    </Datagrid>
  </List>
);

const RegionEdit = (props: React.PropsWithChildren) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="title" />
      <RichTextInput source="body"  />
    </SimpleForm>
  </Edit>
);

const RegionCreate = (props: React.PropsWithChildren) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Create>
);

const AdminPanel = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="regions" list={RegionList} edit={RegionEdit} create={RegionCreate} />
  </Admin>
);

export default AdminPanel;
