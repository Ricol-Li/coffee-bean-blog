# 使用官方 Node.js 运行时作为基础镜像
FROM node:16 AS builder

# 设置工作目录
WORKDIR /app

# 将 package.json 和 package-lock.json 复制到工作目录
COPY package*.json ./

# 安装项目依赖
RUN npm install

# 将项目文件复制到工作目录
COPY . .

# 构建前端项目
RUN npm run docs:build

# 使用 Nginx 作为运行时环境
FROM nginx:alpine

# 将构建好的前端应用复制到 Nginx 的默认 web 根目录
COPY --from=builder /app/.vitepress/dist /usr/share/nginx/html

# 暴露端口
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]