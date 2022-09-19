import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export const LinkToRelatedProducts = ({ record }) => {
  return record ? (
    <Button
      color="primary"
      component={Link}
      to={{
        pathname: "/posts",
        search: `name=${record.name}`,
      }}
    >
      All posts with the category {record.name} ;
    </Button>
  ) : null;
};
