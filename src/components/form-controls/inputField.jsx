const InputField = ({type, name, placeholder, value, className}) => {


    return(
        <input type={type} name={name} placeholder={placeholder} value={value} className={className}/>
    )
}

export default InputField;