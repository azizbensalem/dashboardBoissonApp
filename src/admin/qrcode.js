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
  EditButton,
  ShowButton,
  DeleteButton,
  DateField,
} from "react-admin";
import { ListQRCode } from "../service/bottleService";

ListQRCode().then((data) => {
  localStorage.setItem("list", JSON.stringify(data));
});
const qr = JSON.parse(localStorage.getItem("list"));
console.log(qr);

export const QRCodeCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" label="Name" validate={[required()]} />
    </SimpleForm>
  </Create>
);

export const QRCodeList = () => (
  <List>
    <Datagrid rowClick="show">
      <TextField source="name" />
      <ImageField label="QR Code" source="image" />
      <ShowButton />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const QRCodeShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField label="QR Code" source="image" />
      <ImageField label="QR Code" source="image" />
      <DateField label="Created at" source="createdAt" />
      <DateField label="Updated at" source="updatedAt" />
    </SimpleShowLayout>
  </Show>
);

export const QRCodeEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" label="Name" />
    </SimpleForm>
  </Edit>
);
