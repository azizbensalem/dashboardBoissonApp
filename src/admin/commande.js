import { useEffect, useState } from "react";
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
  DateField,
  EditButton,
  DeleteButton,
  SelectArrayInput,
  ShowButton,
  ArrayField,
  SingleFieldList,
  ChipField,
} from "react-admin";
import { ListBoisson } from "../service/bottleService";
import { Pagination } from "react-admin";

const PostPagination = () => (
  <Pagination rowsPerPageOptions={[10, 25, 50, 100]} />
);

export const CommandeCreate = () => {
  const [boisson, setBoisson] = useState([]);
  useEffect(() => {
    ListBoisson().then((data) => {
      setBoisson(data);
      console.log(data);
    });
  });
  return (
    <Create>
      <SimpleForm>
        <TextInput source="name" label="Name" validate={[required()]} />
        <SelectArrayInput
          source="boisson"
          label="Boisson"
          choices={boisson}
          optionText="name"
          optionValue="_id"
          multiLine={true}
          validate={[required()]}
        />
      </SimpleForm>
    </Create>
  );
};

export const CommandeList = () => (
  <List pagination={<PostPagination />}>
    <Datagrid rowClick="show">
      <TextField source="name" />
      <DateField label="Date de création" source="createdAt" />
      {/* <DateField label="Updated at" source="updatedAt" /> */}
      <ShowButton />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const CommandeShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <ArrayField source="boisson">
        <SingleFieldList>
          <ChipField source="name" label="Nom" />
        </SingleFieldList>
      </ArrayField>
      <DateField label="Date de création" source="createdAt" />
      {/* <DateField label="Updated at" source="updatedAt" /> */}
    </SimpleShowLayout>
  </Show>
);

export const CommandeEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="name" label="Name" validate={[required()]} />
      </SimpleForm>
    </Edit>
  );
};
