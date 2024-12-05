import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './state';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage'; 


const persistConfig = {
    key: 'root', 
    storage,    
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
    reducer: {
        auth: persistedReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [
                'persist/PERSIST', 
                'persist/REHYDRATE', 
                'persist/PURGE', 
                'persist/REGISTER',
            ], 
        },
    }),
});


const persistor = persistStore(store);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </StrictMode>
);

export default persistor;