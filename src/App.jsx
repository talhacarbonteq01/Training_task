import { ConfigProvider, Layout, Row, Switch, theme, Space } from "antd";
import HomePage from "./Components/HomePage";
import * as lightTheme from "./ant-tokens/light.json";
import * as darkTheme from "./ant-tokens/dark.json";
import { useState } from "react";
import { AppProvider } from "./AppContext";
import { Routes, Route, useNavigate } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import ErrorBoundary from "./errorboundary";
import SettingPage from "./Components/SettingsPage";
function App() {
  const [dark, setDark] = useState(false);
  const handleChecked = (checked) => {
    if (checked) setDark(true);
    else setDark(false);
  };

  return (
    <AppProvider>
      <ConfigProvider
        theme={{
          token: dark ? darkTheme : lightTheme,
        }}
      >
       
          <Layout
            style={{
              display: "flex",	
			  width:"100vw",height:"100%"
            }}
          >
            <Row justify="end" style={{ padding: "10px" }}>
              <Switch
                checkedChildren="Light"
                unCheckedChildren="Dark"
                onChange={handleChecked}
              />
            </Row>
            <Content />
          </Layout>
       
      </ConfigProvider>
    </AppProvider>
  );
}
function Content() {
  return (
    
      <Routes>
        <Route eaxct path="/" element={ <ErrorBoundary fallback={<h1> "There is a Error in the HomePage Component"</h1>}><HomePage /></ErrorBoundary>}></Route>
        <Route eaxct path="/settings" element={<SettingPage />}></Route>
      </Routes>
    
  );
}
export default App;
