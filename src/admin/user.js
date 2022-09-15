import {
  List,
  Datagrid,
  TextField,
  Create,
  SimpleForm,
  TextInput,
  required,
  Edit,
  Show,
  SimpleShowLayout,
  EditButton,
  ShowButton,
  DeleteButton,
  DateField,
  PasswordInput,
} from "react-admin";

export const UserCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="username" label="Email" validate={[required()]} />
      <TextInput source="fullName" label="Nom" validate={[required()]} />
      <PasswordInput
        source="password"
        label="Mot de passe"
        validate={[required()]}
      />
    </SimpleForm>
  </Create>
);

export const UserList = () => (
  <List>
    <Datagrid rowClick="show">
      <TextField source="username" label="Email" />
      <TextField source="fullName" label="Nom" />
      <ShowButton />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const UserShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="username" label="Email" />
      <TextField source="fullName" label="Nom" />
      <DateField label="Created at" source="createdAt" />
      <DateField label="Updated at" source="updatedAt" />
    </SimpleShowLayout>
  </Show>
);

export const UserEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="fullName" label="Nom" validate={[required()]} />
    </SimpleForm>
  </Edit>
);
