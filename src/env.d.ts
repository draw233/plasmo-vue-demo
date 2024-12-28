/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_USE_HASH: string
    readonly VITE_PUBLIC_PATH: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
} 