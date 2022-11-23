import { propTypes } from "react-bootstrap/esm/Image"
import { Alert } from "react-bootstrap"

const WarningSign = (prop) => (
    <Alert key="danger" variant="danger">
    {prop.textalert}
  </Alert>
)

export default WarningSign
  

