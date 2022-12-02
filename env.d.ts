interface ImportMetaEnv {
  readonly NEXT_PUBLIC_TYPESENSE_API_KEY: string;
  readonly NEXT_PUBLIC_TYPESENSE_HOST: string;
  readonly NEXT_PUBLIC_TYPESENSE_PORT: number;
}

export interface ImportMeta {
  readonly env: ImportMetaEnv;
}
