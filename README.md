# Trabajo Práctico: Desarrollo con TypeScript - Gestion-EquipInf-TS

Este proyecto consiste en el desarrollo de una aplicación para la gestión de equipos informáticos de una empresa, utilizando para el Backend Node.js con TypeScript, una base de datos relacional PostgreSQL, y autenticación basada en JSON Web Token (JWT), y para el lado del Frontend React con TypeScript.

### Instrucciones de ejecución del proyecto

1. Clonar este repositorio ejecutando:
```bash
git clone https://github.com/silfarias/Gestion-EquipInf-TS.git
```
2. Moverse al directorio ```server```:
```bash
cd server
```

3. Instalar las dependencias del servidor
```bash
npm install
```

4. En el directorio raiz del servidor del proyecto crear un archivo ```.env``` que contenga la siguinente informacion

```bash
PORT=           # Puerto de la aplicación
DB_NAME=        # Nombre de la Base de Datos
DB_USER=        # Usuario de la Base de Datos
DB_PASSWORD=    # Contraseña del Usuario
DB_HOST=        # Host de la Base de Datos
DB_DIALECT=     # Dialecto de la Base de Datos
DB_PORT=        # Puerto de la Base de Datos
SECRET_KEY=     # Llave Secreta para JWT
```

5. Ejecutar servidor:

- Modo desarrollo:
```bash
npm run dev
```

- Modo producción:
```bash
npm start
```

6. Abrir una nueva terminal y moverse al directorio ```client```:
```bash
cd client
```

7. Instalar las dependencias
```bash
npm install
```

8. Ejecutar Proyecto:
```bash
npm run dev
```