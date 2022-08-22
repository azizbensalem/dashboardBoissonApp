import { useEffect, useState } from "react";
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
  SelectInput,
} from "react-admin";
import { ListQRCode } from "../service/bottleService";

export const BoissonCreate = () => {
  const [qr, setQR] = useState([]);
  useEffect(() => {
    ListQRCode().then((data) => {
      setQR(data);
    });
  });
  return (
    <Create>
      <SimpleForm>
        <SelectInput
          source="QRCode"
          label="QRCode"
          choices={qr}
          optionText="name"
          optionValue="_id"
          multiLine={true}
          validate={[required()]}
        />
        <TextInput source="name" label="Name" validate={[required()]} />
        <TextInput source="description" multiLine={true} label="Description" />
        <TextInput
          source="aliments"
          multiLine={true}
          label="Les aliments"
          validate={[required()]}
        />
        <TextInput
          source="valeur"
          multiLine={true}
          label="La valeur nutritionnel"
          validate={[required()]}
        />
        <TextInput
          source="tempopt"
          multiLine={true}
          label="La température optimale de conservation"
          validate={[required()]}
        />
        <TextInput
          source="citation"
          multiLine={true}
          label="Une citation de développement personnel"
          validate={[required()]}
        />
        <TextInput
          source="timer"
          multiLine={true}
          label="Timer"
          validate={[required()]}
        />
      </SimpleForm>
    </Create>
  );
};

export const BoissonList = () => (
  <List>
    <Datagrid rowClick="show">
      <TextField source="name" />
      <ImageField source="QRCode.image" />
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
      <TextField label="Les aliments" source="aliments" />
      <TextField label="La valeur nutritionnel" source="valeur" />
      <TextField
        label="La température optimale de conservation"
        source="tempopt"
      />
      <TextField
        label="Une citation de développement personnel"
        source="citation"
      />
      <TextField label="Timer" source="timer" />
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
