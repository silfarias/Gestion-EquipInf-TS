# Trabajo Práctico: Desarollo con TypeScript - Gestion-EquipInf-TS

Este proyecto consiste en el desarrollo de una aplicación para la gestión de equipos informáticos de una empresa, utilizando Node.js con TypeScript, una base de datos relacional PostgreSQL, y autenticación basada en JSON Web Token (JWT).

### Instrucciones de ejecución del proyecto

1. Clonar este repositorio ejecutando:
```bash
git clone https://github.com/silfarias/Gestion-EquipInf-TS.git
```

2. Instalar las dependencias
```bash
npm install
```

3. En el directorio raiz del proyecto crear un archivo ```.env``` que contenga la siguinente informacion

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

4. Ejucutar el proyecto

- Modo desarrollo:
```bash
npm run dev
```

-Modo producción:
```bash
npm start
```