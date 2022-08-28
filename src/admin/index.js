import { Admin, Resource } from "react-admin";
import QrCodeIcon from "@mui/icons-material/QrCode";
import LiquorIcon from "@mui/icons-material/Liquor";
import jsonServerProvider from "ra-data-json-server";
import {
  BoissonCreate,
  BoissonEdit,
  BoissonList,
  BoissonShow,
} from "./boisson";
import { QRCodeCreate, QRCodeEdit, QRCodeList, QRCodeShow } from "./qrcode";
import { authProvider } from "../authProvider";
import dashboard from "./dashboard";
// import MyLoginPage from "../loginPage";

const dataProvider = jsonServerProvider("https://bottlear.herokuapp.com/api");

const App = () => (
  <Admin
    title="BottleAR Admin"
    dashboard={dashboard}
    dataProvider={dataProvider}
    authProvider={authProvider}
    requireAuth
  >
    <Resource
      name="bottle"
      icon={LiquorIcon}
      show={BoissonShow}
      list={BoissonList}
      create={BoissonCreate}
      edit={BoissonEdit}
    />
    <Resource
      name="QRCode"
      icon={QrCodeIcon}
      show={QRCodeShow}
      list={QRCodeList}
      create={QRCodeCreate}
      edit={QRCodeEdit}
    />
  </Admin>
);

export default App;
