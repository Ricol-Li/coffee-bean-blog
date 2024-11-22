# 使用官方 Node.js 运行环境作为基础镜像
FROM node:16-alpine AS build

# 复制代码
ADD . /app
# 设置工作目录
WORKDIR /app

# 将 package.json 和 package-lock.json 复制到工作目录中
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制所有文件到容器中
COPY . .

# 构建项目
RUN npm run docs:build

# 使用 Nginx 来服务静态文件
FROM nginx:alpine
COPY --from=build /app/.vitepress/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]