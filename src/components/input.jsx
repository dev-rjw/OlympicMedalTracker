const Input = ({ value, setValue, children }) => {
    return (
        <div className="input-field">
            <label htmlFor={children}>{children}</label>
            <input type="text" id={children} value={value} onChange={(e) => setValue(e.target.value)} placeholder="국가 입력"></input>
        </div>
    );
};

export default Input;
