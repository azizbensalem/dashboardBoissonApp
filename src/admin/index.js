import { Admin, Resource } from "react-admin";
import QrCodeIcon from "@mui/icons-material/QrCode";
import LiquorIcon from "@mui/icons-material/Liquor";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
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
import {
  CommandeCreate,
  CommandeEdit,
  CommandeList,
  CommandeShow,
} from "./commande";
import { UserCreate, UserEdit, UserList, UserShow } from "./user";

const dataProvider = jsonServerProvider("https://bottlear.herokuapp.com/api");

const App = () => {
  return (
    <Admin
      title="BottleAR Admin"
      dashboard={dashboard}
      dataProvider={dataProvider}
      authProvider={authProvider}
      requireAuth
    >
      {(permissions) => (
        <>
          {permissions === "superadmin" ? (
            <Resource
              name="User"
              icon={LiquorIcon}
              show={UserShow}
              list={UserList}
              create={UserCreate}
              edit={UserEdit}
            />
          ) : null}
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
          <Resource
            name="Commande"
            icon={ShoppingCartIcon}
            show={CommandeShow}
            list={CommandeList}
            create={CommandeCreate}
            edit={CommandeEdit}
          />
        </>
      )}
    </Admin>
  );
};

export default App;
