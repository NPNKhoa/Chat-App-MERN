import { SideBar } from "./components";
import ChatContainer from "./components/ChatContainer";

const HomePage = () => {
    return (
        <div className="flex w-2/3 h-5/6 rounded-md bg-blue-100 m-auto">
            <SideBar />
            <ChatContainer />
        </div>
    );
};

export default HomePage;