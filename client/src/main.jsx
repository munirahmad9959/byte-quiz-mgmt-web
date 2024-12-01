import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './state';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage'; // Defaults to localStorage for web

// Configure Redux Persist
const persistConfig = {
    key: 'root', // Key to save the persisted state
    storage,     // Use localStorage
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, authReducer);

// Create the Redux store and configure middleware
const store = configureStore({
    reducer: {
        auth: persistedReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'], // Ignore persist actions
        },
    }),
});

// Create the persistor
const persistor = persistStore(store);

// Render the application
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
