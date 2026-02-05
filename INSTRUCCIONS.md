# Guia d'Instal·lació - Be&Go Portal

## Pas 1: Instal·lar Node.js

L'aplicació necessita Node.js per funcionar. Segueix aquests passos:

1. **Descarrega Node.js:**
   - Ves a: https://nodejs.org/
   - Descarrega la versió **LTS** (recomanada)
   - Executa l'instal·lador i segueix les instruccions
   - **IMPORTANT:** Marca l'opció "Automatically install the necessary tools" durant la instal·lació

2. **Verifica la instal·lació:**
   - Obre una nova terminal (PowerShell o CMD)
   - Executa: `node --version`
   - Hauries de veure una versió com: `v20.x.x`

## Pas 2: Instal·lar les dependències de l'aplicació

Un cop tinguis Node.js instal·lat:

1. Obre una terminal a la carpeta: `C:\Users\Usuario\Desktop\Eines Adri\Web interna\beandgo-app`
2. Executa:
   ```bash
   npm install
   ```
3. Espera que s'instal·lin totes les dependències (pot trigar uns minuts)

## Pas 3: Executar l'aplicació

Per executar l'aplicació:

```bash
npm start
```

L'aplicació s'obrirà en una finestra independent amb la barra de navegació de Be&Go.

## Pas 4 (Opcional): Crear executable per distribuir

Si vols crear un fitxer .exe per distribuir als treballadors:

```bash
npm run build
```

L'executable es crearà a la carpeta `dist/` i podrà executar-se sense necessitat de tenir Node.js instal·lat.

---

## Alternatives si no vols instal·lar Node.js

Si prefereixes no instal·lar Node.js, puc crear:

1. **Extensió de navegador** - Més senzilla, només cal instal·lar l'extensió al Chrome/Edge
2. **Solució amb navegació directa** - Sense dependències, però sense barra fixa

Avisa'm quina opció prefereixes! 😊
