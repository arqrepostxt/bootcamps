import PropTypes from 'prop-types'

function Item({marca, ano_fundacao}) {
    return (
        <>
        <li>{ marca } - { ano_fundacao }</li>
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_fundacao: PropTypes.number.isRequired,
}

Item.defaultProps = {
    marca: 'Faltou ',
    ano_fundacao: 0,
}
export default Item