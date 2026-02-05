# Be&Go Portal - Aplicació d'Escriptori

Portal intern de Be&Go per accedir a les diferents vistes de Fibery amb una barra de navegació integrada.

## Requisits

- Node.js (versió 16 o superior)
- npm (inclòs amb Node.js)

## Instal·lació

1. Obre una terminal a la carpeta `beandgo-app`
2. Instal·la les dependències:
   ```bash
   npm install
   ```

## Executar l'aplicació

Per executar l'aplicació en mode desenvolupament:

```bash
npm start
```

## Crear l'executable

Per crear un executable de Windows (.exe):

```bash
npm run build
```

L'executable es crearà a la carpeta `dist/`.

## Característiques

- ✅ Barra de navegació fixa sempre visible
- ✅ Navegació entre vistes de Fibery sense obrir noves pestanyes
- ✅ Pantalla de benvinguda amb accés ràpid
- ✅ Disseny modern amb tema fosc
- ✅ Funciona com una aplicació nativa de Windows

## Dreceres de teclat

- **ESC**: Tornar a la pantalla d'inici
- **F5** o **Ctrl+R**: Recarregar la pàgina actual

## Distribució

Un cop creat l'executable amb `npm run build`, pots distribuir el fitxer `.exe` als treballadors.
L'aplicació no requereix instal·lació de Node.js per executar-se.

## Suport

Per qualsevol problema o suggeriment, contacta amb l'equip tècnic de Be&Go.
