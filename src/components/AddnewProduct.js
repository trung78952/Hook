import { useState } from "react";
const AddnewProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [size, setSize] = useState('');
    const [color, setColor] = useState('');
    const [show, setShow] = useState(true);
    const handleSubmit = () => {
        let object = { name, price, size, color }
        let productList = localStorage.getItem("product")
        if (productList) {
            let arr = JSON.parse(productList);
            arr.push((object))
            localStorage.setItem('product', JSON.stringify(arr))
        } else {
            localStorage.setItem('product', JSON.stringify([object]))
        }
        setName('')
        setPrice('0')
        setSize('')
        setColor('')
    }
    const handleShow = () => {
        setShow(!show)
    }
    return (
        <>
            <div>
                {show === true ? <>
                    <div onClick={() => handleShow()}>hide</div>
                    <fieldset className="fieldset">
                        <legend>Product:</legend>
                        <label > Name:</label>
                        <input type="text" id="fname" name="fname" value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                        <label >Price:</label>
                        <input type="text" id="lname" name="lname" value={price}
                            onChange={(event) => setPrice(event.target.value)}
                        />
                        <label >Size:</label>
                        <input type="email" id="email" name="email" value={size}
                            onChange={(event) => setSize(event.target.value)}
                        />
                        <label >Color:</label>
                        <input type="text" id="birthday" name="birthday" value={color}
                            onChange={(event) => setColor(event.target.value)}
                        /><br />
                        <button onClick={() => handleSubmit()}>submit</button>
                    </fieldset></>
                    : <div onClick={() => handleShow()}>show</div>
                }
            </div>
            <div>List product</div>
            <div>{localStorage.getItem('product')}</div>
        </>
    )
}
export default AddnewProduct;