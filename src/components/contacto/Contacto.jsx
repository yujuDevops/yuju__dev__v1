import propTypes from "prop-types"

export const Contacto = ({title}) => {
  return (
    <div>{title}</div>
  )
}

Contacto.propTypes = { 
  title : propTypes.string.isRequired

}
