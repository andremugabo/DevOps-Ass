FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

# Install serve to serve static files
RUN npm install -g serve

# ✅ Serve the Vite build output (which is in 'dist')
CMD ["serve", "-s", "dist", "-l", "3000"]
