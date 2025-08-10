# 🚀 First App Fastify

Mi primera aplicación con **Fastify** - Un servidor web rápido y eficiente para Node.js con base de datos PostgreSQL.

## 📋 Descripción

Este proyecto es una API REST construida con Fastify que incluye:

- ✅ Servidor HTTP con logging configurado  
- ✅## 🔄 **Diferencias entre Batect y Docker Compose**

Para desarrolladores que conocen Docker Compose, es importante entender las diferencias:

| Característica | Docker Compose | Batect |
|---------------|----------------|---------|
| **Archivos .env** | ✅ Soporta `env_file: .env` | ❌ No soporta archivos .env |
| **Variables** | `${VAR}` del sistema + .env | Variables directas en YAML |
| **Propósito** | Orquestación general | Tareas de desarrollo específicas |
| **Configuración** | docker-compose.yml + .env | batect.yml únicamente |
| **Ventaja** | Estándar industria | Simplicidad y reproducibilidad |
| **Filosofía** | "Componer servicios" | "Ejecutar tareas" |

### **¿Por qué Batect no usa .env?**

**Batect** está diseñado para **tareas de desarrollo reproducibles**. En lugar de depender de archivos externos que pueden variar entre máquinas, **configura todo directamente en `batect.yml`** para garantizar que todos los desarrolladores tengan exactamente el mismo entorno.

**Docker Compose:** `docker-compose up` (requiere .env)  
**Batect:** `./batect start-server` (todo pre-configurado)

## 🧪 **¿Qué Aprendes con Este Proyecto?**

Como principiante, este proyecto te enseña:

1. **📦 Gestión de Dependencias** - Como usar npm y package.json
2. **🐳 Contenedores** - Docker y orquestación con Batect
3. **🗃️ Bases de Datos** - PostgreSQL y operaciones CRUD
4. **🧪 Testing** - Escribir y ejecutar pruebas automatizadas
5. **🔧 DevOps Básico** - Ambiente de desarrollo profesional
6. **📝 API REST** - Crear endpoints GET y POST
7. **🎯 Buenas Prácticas** - Linting, formateo y estructura de proyecto
8. **⚖️ Herramientas vs Estándares** - Cuándo usar Batect vs Docker Composetos PostgreSQL con pg-promise
- ✅ API endpoints para operaciones CRUD
- ✅ Contenedores Docker con Batect para desarrollo
- ✅ Testing automatizado con Jest
- ✅ Hot-reload con nodemon para desarrollo
- ✅ Linting con ESLint y formateo con Prettier
- ✅ Reportes de cobertura de código

## 🛠️ Tecnologías Utilizadas

| Herramienta | Versión | Propósito |
|-------------|---------|-----------|
| **Fastify** | ^5.4.0 | Framework web principal |
| **PostgreSQL** | 14 | Base de datos |
| **pg-promise** | ^11.15.0 | Cliente PostgreSQL |
| **Batect** | 0.85.0 | Orquestación de contenedores |
| **Jest** | ^30.0.5 | Testing framework |
| **ESLint** | ^9.32.0 | Linter de código |
| **Prettier** | ^3.4.2 | Formateo de código |
| **Nodemon** | ^3.1.10 | Hot-reload en desarrollo |

## 🏗️ Estructura del Proyecto

```
First-App-Fastify/
├── src/
│   ├── app.js                    # Configuración principal de Fastify
│   ├── config/
│   │   └── index.js             # Variables de entorno
│   ├── plugin/
│   │   ├── database.js          # Plugin de conexión a PostgreSQL
│   │   └── helper/
│   │       └── migrations.js    # Helper para migraciones
│   └── routes/
│       └── templateTestRoutes/
│           └── index.js         # Rutas de la API
├── tests/
│   └── routes/
│       └── temp-route.test.js   # Tests de las rutas
├── coverage/                     # Reportes de cobertura (autogenerado)
├── postgres-data/               # Datos de PostgreSQL (autogenerado)
├── batect.yml                   # Configuración de contenedores
├── jest.config.js               # Configuración de Jest
├── server.js                    # Punto de entrada del servidor
└── package.json                 # Dependencias y scripts
```

## 🚀 Guía para Principiantes - Paso a Paso

### 📋 **Prerrequisitos**

Antes de empezar, necesitas tener instalado:

1. **Node.js** (versión 18 o superior)
   - Descarga desde: https://nodejs.org/
   - Verifica la instalación: `node --version`

2. **Docker Desktop** 
   - Descarga desde: https://www.docker.com/products/docker-desktop
   - **⚠️ IMPORTANTE:** Docker debe estar ejecutándose antes de usar Batect

3. **Git** (opcional, para clonar el proyecto)
   - Descarga desde: https://git-scm.com/

### 🏁 **Paso 1: Obtener el Proyecto**

```bash
# Opción A: Clonar con Git
git clone https://github.com/JairoManchay/First-App-Fastify.git
cd First-App-Fastify

# Opción B: Descargar ZIP y extraer
# Luego navegar a la carpeta en terminal
```

### 🐳 **Paso 2: Configurar Batect (Recomendado)**

**Batect** es una herramienta que maneja contenedores Docker automáticamente. Es la **opción recomendada** porque:

- ✅ **No necesitas instalar PostgreSQL** localmente
- ✅ **Configuración automática** de base de datos
- ✅ **Mismo entorno** para todo el equipo
- ✅ **Variables de entorno** ya configuradas

#### **En Windows:**

```powershell
# 1. Descargar Batect (ya incluido en el proyecto)
# El archivo 'batect' ya está en la carpeta del proyecto

# 2. Verificar que Docker Desktop esté ejecutándose
# Debes ver el ícono de Docker en la barra de tareas

# 3. Probar Batect
.\batect --help
```

#### **Variables de Entorno en Batect:**

**⚠️ IMPORTANTE:** Batect **NO usa archivos .env** como Docker Compose. Las variables están **configuradas directamente** en `batect.yml`:

```yaml
# En batect.yml (ya configurado)
environment:
  PORT: 8080
  POSTGRES_URI: postgresql://app:123456@db/db
```

**No necesitas crear archivos .env para Batect** - todo está listo para usar.

#### **En Mac/Linux:**

```bash
# 1. Dar permisos de ejecución
chmod +x ./batect

# 2. Probar Batect
./batect --help
```

### 🗃️ **Paso 3: Instalar Dependencias**

```bash
# Instalar dependencias de Node.js usando Batect
.\batect install-dep

# ⏳ Este paso puede tomar 3-5 minutos la primera vez
# porque descarga las imágenes de Docker
```

### 🚀 **Paso 4: Iniciar la Aplicación**

```bash
# Iniciar servidor con base de datos
.\batect start-server

# 🎉 Si todo está bien, verás:
# - PostgreSQL iniciando
# - Servidor Fastify en puerto 4000
# - Logs de conexión a la base de datos
```

### 🌐 **Paso 5: Probar la Aplicación**

Una vez que el servidor esté ejecutándose:

1. **Abrir tu navegador** y visitar:
   - http://localhost:4000/api/v1/test (GET - ver datos)

2. **Probar con herramientas como Postman:**
   ```
   GET  http://localhost:4000/api/v1/test
   POST http://localhost:4000/api/v1/test
   Body: {"title": "Mi primer test"}
   ```

### 🧪 **Paso 6: Ejecutar Tests**

```bash
# Ejecutar todos los tests
.\batect test

# 📊 Verás:
# - Tests ejecutándose
# - Resultados de las pruebas
# - Reporte de cobertura de código
```

## 📋 **Comandos Disponibles**

| Comando | Descripción | Cuándo usar |
|---------|-------------|-------------|
| `.\batect install-dep` | Instala dependencias | Primera vez y cuando cambien dependencias |
| `.\batect start-server` | Inicia servidor + BD | Para desarrollar |
| `.\batect test` | Ejecuta tests | Para verificar que todo funciona |
| `.\batect --clean` | Limpia contenedores | Cuando hay problemas con Docker |

## 🚨 **Solución de Problemas Comunes**

### **Error: "Docker is not running"**
```bash
# 1. Iniciar Docker Desktop
# 2. Esperar hasta ver el ícono en la barra de tareas
# 3. Intentar de nuevo
```

### **Error: "Port already allocated"**
```bash
# Un puerto está ocupado, encontrar el proceso:
netstat -ano | findstr ":4000"
# Matar el proceso:
taskkill /PID <numero_del_pid> /F
```

### **Tests fallan por conexión a BD**
```bash
# Asegurar que la BD esté ejecutándose primero:
.\batect start-server
# En otra terminal:
.\batect test
```

### **Instalación muy lenta**
```bash
# Es normal la primera vez (3-5 minutos)
# Se está descargando Node.js y PostgreSQL
# Las siguientes veces serán mucho más rápidas
```
## 🔧 **Desarrollo Local (Sin Contenedores)**

Si **NO quieres usar Docker** y prefieres desarrollo tradicional:

### **⚠️ Prerrequisitos Adicionales:**
- **Node.js** instalado (versión 18+)
- **PostgreSQL** instalado y ejecutándose localmente
- **Base de datos** creada manualmente

### **🔧 Configuración Paso a Paso:**

#### **1. Instalar dependencias:**
```bash
npm install
```

#### **2. Configurar variables de entorno:**
```bash
# Crear archivo .env desde la plantilla
copy .env.template .env

# Editar .env con tus datos:
# POSTGRES_URI=postgresql://tu_usuario:tu_password@localhost:5432/tu_base
# PORT=4000
```

#### **3. Crear base de datos:**
```sql
-- Conectar a PostgreSQL y ejecutar:
CREATE DATABASE tu_base_de_datos;
CREATE USER tu_usuario WITH PASSWORD 'tu_password';
GRANT ALL PRIVILEGES ON DATABASE tu_base_de_datos TO tu_usuario;
```

#### **4. Ejecutar aplicación:**
```bash
# Desarrollo con hot-reload
npm run dev

# Tests
npm test

# Linting y formato
npm run lint
npm run format
```

### **🔍 Diferencias importantes:**

| Aspecto | Con Batect (Recomendado) | Sin Batect (Local) |
|---------|--------------------------|-------------------|
| **PostgreSQL** | ✅ Automático | ❌ Manual |
| **Variables** | ✅ Pre-configuradas | ❌ Crear .env |
| **Base de datos** | ✅ Auto-creada | ❌ Crear manual |
| **Dependencias** | ✅ En contenedor | ❌ En tu máquina |
| **Consistencia** | ✅ Igual para todos | ❌ Varía por máquina |

# 2. Configurar variable de entorno
# Crear archivo .env con:
POSTGRES_URI=postgresql://usuario:password@localhost:5432/tu_base

# 3. Ejecutar en modo desarrollo
npm run dev

# 4. Ejecutar tests
npm test
```

## 🧪 **¿Qué Aprendes con Este Proyecto?**

Como principiante, este proyecto te enseña:

1. **📦 Gestión de Dependencias** - Como usar npm y package.json
2. **🐳 Contenedores** - Docker y orquestación con Batect
3. **�️ Bases de Datos** - PostgreSQL y operaciones CRUD
4. **🧪 Testing** - Escribir y ejecutar pruebas automatizadas
5. **🔧 DevOps Básico** - Ambiente de desarrollo profesional
6. **� API REST** - Crear endpoints GET y POST
7. **🎯 Buenas Prácticas** - Linting, formateo y estructura de proyecto

## � **Próximos Pasos**

Una vez que domines este proyecto básico, puedes:

1. **Agregar más endpoints** (PUT, DELETE)
2. **Implementar autenticación** (JWT tokens)
3. **Agregar validación** de datos de entrada
4. **Crear más tablas** y relaciones en la BD
5. **Añadir middleware** personalizado
6. **Deployar a la nube** (Heroku, AWS, etc.)

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Añade nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crea un Pull Request

## 📝 Licencia

ISC License - ve el archivo [LICENSE](LICENSE) para detalles.

## 👨‍💻 Autor

**Jairo Manchay** - [GitHub](https://github.com/JairoManchay)

---

⭐ **¡Dale una estrella al repo si te ayudó!** ⭐
