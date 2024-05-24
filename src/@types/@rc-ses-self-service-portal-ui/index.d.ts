declare module '@rc-ses/self-service-portal-ui' {
  import * as React from 'react'

  export type User = {
    name: string;
    last_name: string;
    personal_code: string;
    ILTU: string;
    EIDAS: string;
    SSO_ID: string;
    VAR_ID: string;
    SSO_IP: string;
    SSO_LAIKAS: string;
    SSO_TIPAS: string;
    SSO_SALTINIS: string;
    VASU_ID: string;
    ASM_NR: string;
    AVD_NR: string;
    JA_OBJ_ID: string;
    IGAL_ID: string;
    AMNT_TIPAS: string;
    VAR_ID_ATSTOVAUJAMOJO: string;
    PROK_ID: string;
    FAVA_ID: string;
    VAID_KODAS: string;
    AMN_ID: string;
    VAR_ID_TARPININKO: string;
    FFVA_ID: string;
    FASM_KODAS: string;
    AMN_ID_TEIKEJO_FA: string;
  };

  export const addToCart: (service: string) => void;

  export const getCartContent: () => string[];

  export const removeFromCart: (service: string) => void;

  export const clearCart: () => void;

  export const refreshCart: (service: string) => void;

  export const getUser: () => User | undefined;
}
