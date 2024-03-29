import AllProducts from "./AllProducts";

export const metadata = {
    title: 'Add product || Next Hero',
    description: 'Generated by sazzad',
}

const AllProductPage = () => {
    return (
        <div className="w-full m-10">
            <h1 className="mb-5 text-2xl font-semibold">all products</h1>
            <AllProducts></AllProducts>
        </div>
    );
};

export default AllProductPage;