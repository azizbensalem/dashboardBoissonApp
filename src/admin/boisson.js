import {
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
  SimpleShowLayout,
  DateField,
  EditButton,
  ShowButton,
  DeleteButton,
} from "react-admin";

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

export const BoissonList = () => (
  <List>
    <Datagrid rowClick="show">
      <TextField source="name" />
      <ImageField label="QR Code" source="QRCode" />
      <DateField label="Created at" source="createdAt" />
      <DateField label="Updated at" source="updatedAt" />
      <ShowButton />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const BoissonShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="description" />
      <ImageField label="QR Code" source="QRCode" />
      <DateField label="Created at" source="createdAt" />
      <DateField label="Updated at" source="updatedAt" />
    </SimpleShowLayout>
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
