import styles from '../style'

const Button = ({text}) => {
  return (
        <button type="button" className="z-[1] gradient__button p-6 mt-5 font-poppins font-semibold  text-[18px] gradient">
            {text}
        </button>
  )
};

export default Button