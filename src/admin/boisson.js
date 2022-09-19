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
  NumberField,
  EditButton,
  ShowButton,
  DeleteButton,
  SelectInput,
  NumberInput,
  Filter,
  SearchInput,
} from "react-admin";
import { ListQRCode } from "../service/bottleService";
import { LinkToRelatedProducts } from "../components/buttonFilterList";

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
        <NumberInput
          source="valeur"
          multiLine={true}
          label="La valeur nutritionnel"
          validate={[required()]}
        />
        <NumberInput
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
        <NumberInput
          source="timer"
          multiLine={true}
          label="Timer"
          validate={[required()]}
        />
      </SimpleForm>
    </Create>
  );
};

const BoissonFilters = (props) => (
  <Filter {...props}>
    <SearchInput
      placeholder="Nom de la bouteille"
      source="name"
      resettable
      alwaysOn
    />
  </Filter>
);
export const BoissonList = (props) => (
  <List {...props} disableSyncWithLocation filters={<BoissonFilters />}>
    <Datagrid rowClick="show">
      <LinkToRelatedProducts />
      <TextField source="name" />
      <ImageField source="QRCode.image" />
      <DateField label="Date de création" source="createdAt" />
      <DateField label="Date de Modification" source="updatedAt" />
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
      <TextField source="QRCode.image" />
      <ImageField source="QRCode.image" />
      <TextField label="Les aliments" source="aliments" />
      <NumberField label="La valeur nutritionnel" source="valeur" />
      <NumberField
        label="La température optimale de conservation"
        source="tempopt"
      />
      <TextField
        label="Une citation de développement personnel"
        source="citation"
      />
      <NumberField label="Timer" source="timer" />
      <DateField label="Date de création" source="createdAt" />
      <DateField label="Date de Modification" source="updatedAt" />
    </SimpleShowLayout>
  </Show>
);

export const BoissonEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="name" label="Name" validate={[required()]} />
        <TextInput source="description" multiLine={true} label="Description" />
        <TextInput
          source="aliments"
          multiLine={true}
          label="Les aliments"
          validate={[required()]}
        />
        <NumberInput
          source="valeur"
          multiLine={true}
          label="La valeur nutritionnel"
          validate={[required()]}
        />
        <NumberInput
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
        <NumberInput
          source="timer"
          multiLine={true}
          label="Timer"
          validate={[required()]}
        />
      </SimpleForm>
    </Edit>
  );
};
