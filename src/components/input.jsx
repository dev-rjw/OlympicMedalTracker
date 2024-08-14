const Input = ({ value, setValue, children }) => {
    return (
        <div className="input-field">
            <div>{children}</div>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="국가 입력"></input>
        </div>
    );
};

export default Input;
