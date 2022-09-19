import { Admin, Resource } from "react-admin";
import QrCodeIcon from "@mui/icons-material/QrCode";
import LiquorIcon from "@mui/icons-material/Liquor";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { createTheme } from "@mui/material/styles";
import polyglotI18nProvider from "ra-i18n-polyglot";
import frenchMessages from "ra-language-french";
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
import { customDataProvider } from "../service/dataProvider";
import { blue, pink } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: pink,
    secondary: blue,
  },
});
const i18nProvider = polyglotI18nProvider(() => frenchMessages, "fr");

const App = () => {
  return (
    <Admin
      title="BottleAR Admin"
      locale="fr"
      theme={theme}
      dashboard={dashboard}
      dataProvider={customDataProvider}
      authProvider={authProvider}
      i18nProvider={i18nProvider}
      requireAuth
    >
      {(permissions) => (
        <>
          {permissions === "superadmin" ? (
            <Resource
              name="User"
              options={{ label: "Utilisateurs" }}
              icon={PersonIcon}
              show={UserShow}
              list={UserList}
              create={UserCreate}
              edit={UserEdit}
            />
          ) : null}
          <Resource
            name="bottle"
            options={{ label: "Bouteilles" }}
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
