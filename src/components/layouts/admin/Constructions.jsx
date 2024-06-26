import { useEffect, useState } from "react";
import { AdminInput } from "../../fragments/AdminInput";
import { ProductsItem } from "../../fragments/ProductsItem";
import axios from "axios";

export function Constructions() {
    const [newData, setNewData] = useState({
        design_name: "",
        location: "",
        total_price: "",
        photo: [],
        square_meters: "100",
        province: "",
        style: "",
        category: "",
        descriptions: "",
        start: "",
        finish: "",
        constructor: "",
    })

    useEffect(() => {
        console.log(newData)
    }, [newData])

    async function handleUploadData() {
        const newForm = new FormData();
        for (let i = 0; i < newData.photo.length; i++) {
            newForm.append('photo', newData.photo[i]);
        }

        Object.keys(newData).forEach((key) => {
            newForm.append(key, newData[key]);
        });

        try {
            const res = await axios.post('https://buildong-api.vercel.app/constructions/upload', newForm, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <div className="flex flex-col gap-10">
                <div>
                    <h1 className="text-3xl font-medium text-font-gray">Add New Construction</h1>
                </div>
                <div className="grid xl:grid-cols-2 gap-5">
                    <ProductsItem
                        title="Description"
                    >
                        <AdminInput
                            subTitle={"Design Name"}
                            onChange={(e) => setTimeout(() => { setNewData({ ...newData, design_name: e.target.value }) }, 3000)}
                        />
                        <AdminInput
                            subTitle={"Design Description"}
                            onChange={(e) => setNewData({ ...newData, descriptions: e.target.value })}
                            type={"textarea"}
                        />
                        <AdminInput
                            subTitle={"Location"}
                            onChange={(e) => setNewData({ ...newData, location: e.target.value })}
                        />
                        <AdminInput
                            subTitle={"Province"}
                            onChange={(e) => setNewData({ ...newData, province: e.target.value })}
                        />

                    </ProductsItem>

                    <ProductsItem
                        title="Detail Design"
                    >
                        <AdminInput
                            subTitle={"Price"}
                            onChange={(e) => setNewData({ ...newData, total_price: e.target.value })}
                            type={'number'}
                        />

                        <AdminInput
                            subTitle={"Start"}
                            onChange={(e) => setNewData({ ...newData, start: e.target.value })}
                            type={'date'}
                        />
                        <AdminInput
                            subTitle={"Finish"}
                            onChange={(e) => setNewData({ ...newData, finish: e.target.value })}
                            type={"date"}
                        />

                    </ProductsItem>

                    <ProductsItem
                        title="Catergory"
                    >
                        <AdminInput
                            subTitle={"Category"}
                            onChange={(e) => setNewData({ ...newData, category: e.target.value })}
                        />
                        <AdminInput
                            subTitle={"Style"}
                            onChange={(e) => setNewData({ ...newData, style: e.target.value })}
                        />
                    </ProductsItem>

                    <ProductsItem
                        title={'Product Image'}
                    >
                        <AdminInput
                            type={'file'}
                            img={newData.photo}
                            onChange={(e) => setNewData({ ...newData, photo: [...newData.photo, e.target.files[0]] })}
                        />
                    </ProductsItem>

                    <ProductsItem
                        title={'Constructor'}
                    >

                        <AdminInput
                            subTitle={"Worker"}
                            onChange={(e) => setNewData({ ...newData, constructor: e.target.value })}
                            type={'number'}
                        />
                        <AdminInput
                            subTitle={"Square Meters"}
                            onChange={(e) => setNewData({ ...newData, square_meters: e.target.value })}
                        />
                    </ProductsItem>

                    <div className="w-full h-12 gap-5 flex">
                        <button className="px-5 py-2 border font-medium rounded-lg bg-red-500 text-white">Discard</button>
                        <button className="px-5 py-2 border font-medium rounded-lg bg-primary text-white" onClick={handleUploadData}>Add Product</button>
                    </div>
                </div>
            </div>
        </>
    )
}