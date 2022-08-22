import { Admin, Resource } from "react-admin";

import jsonServerProvider from "ra-data-json-server";
import {
  BoissonCreate,
  BoissonEdit,
  BoissonList,
  BoissonShow,
} from "./boisson";
import { QRCodeCreate, QRCodeEdit, QRCodeList, QRCodeShow } from "./qrcode";

const dataProvider = jsonServerProvider("http://localhost:3000/api");

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="bottle"
      show={BoissonShow}
      list={BoissonList}
      create={BoissonCreate}
      edit={BoissonEdit}
    />
    <Resource
      name="QRCode"
      show={QRCodeShow}
      list={QRCodeList}
      create={QRCodeCreate}
      edit={QRCodeEdit}
    />
  </Admin>
);

export default App;
