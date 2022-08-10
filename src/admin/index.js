import {
  Admin,
  Resource,
  List,
  Datagrid,
  TextField,
  ImageField,
  Create,
  SimpleForm,
  TextInput,
  required,
  Edit,
  Show,
  TopToolbar,
  EditButton,
  CreateButton,
} from "react-admin";

import jsonServerProvider from "ra-data-json-server";

export const BoissonCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" label="Name" validate={[required()]} />
      <TextInput
        source="description"
        multiLine={true}
        label="Description"
        validate={[required()]}
      />
    </SimpleForm>
  </Create>
);

const ListActions = () => (
  <TopToolbar>
    <CreateButton />
  </TopToolbar>
);

export const BoissonList = () => (
  <List actions={<ListActions />}>
    <Datagrid rowClick="show">
      <TextField source="name" />
      <TextField source="description" />
      <ImageField source="QRCode" title="QRCode" />
    </Datagrid>
  </List>
);

export const BoissonShow = () => (
  <Show actions={BoissonShowActions}>
    <Datagrid>
      <TextField source="name" />
      <TextField source="description" />
      <ImageField source="QRCode" title="QRCode" />
    </Datagrid>
  </Show>
);

export const BoissonEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" label="Name" />
      <TextInput source="description" label="Description" multiLine={true} />
    </SimpleForm>
  </Edit>
);

const BoissonShowActions = () => (
  <TopToolbar>
    <EditButton />
  </TopToolbar>
);

const dataProvider = jsonServerProvider("http://13.36.173.35/api");

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="boisson"
      show={BoissonShow}
      list={BoissonList}
      create={BoissonCreate}
      edit={BoissonEdit}
    />
  </Admin>
);

export default App;
