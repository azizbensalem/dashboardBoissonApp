import { Admin, Resource } from "react-admin";

import jsonServerProvider from "ra-data-json-server";
import {
  BoissonCreate,
  BoissonEdit,
  BoissonList,
  BoissonShow,
} from "./boisson";

const dataProvider = jsonServerProvider("https://bottlear.herokuapp.com/api");

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="bottle"
      show={BoissonShow}
      list={BoissonList}
      create={BoissonCreate}
      edit={BoissonEdit}
    />
  </Admin>
);

export default App;
