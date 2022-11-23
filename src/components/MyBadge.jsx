import { propTypes } from "react-bootstrap/esm/Image"
import { Badge } from "react-bootstrap"

const MyBadge = (prop) => (
    <h2 className={prop.classn}>
    <Badge variant="secondary">{prop.text}</Badge>
  </h2>
)

export default MyBadge
  