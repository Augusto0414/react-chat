import { Fragment } from "react/jsx-runtime"
import { AppRoute } from "./routes/AppRoute"
import { store } from "./store/store"
import { Provider } from "react-redux";

const ChatApp = () => {
  return (
    <Fragment>
      <Provider store={store} >
        <AppRoute />
      </Provider>
    </Fragment>
  )
}

export default ChatApp
