import Sidebar from "./Sidebar";

export const metadata = {
    title: 'Dashboard || Next Hero',
    description: 'Generated by sazzad',
}
const dashboardLayout = ({ children }) => {
    return (
        <div className="flex container mx-auto">
            <Sidebar></Sidebar>
            {children}
        </div>
    );
};

export default dashboardLayout;