const fs = require('fs');
// const os = require('os');

const basePath = `${process.cwd()}/src`;
const tempPath = `${process.cwd()}/scripts`;
// const author = os.homedir().match(/.+\/(\w+)$/)[1];
const templates = ['name.ts', 'name.test.ts'];
const names = process.argv.slice(2);


// 创建文件夹
const newFolder = (folderName) => {
  fs.mkdirSync(`${folderName}`);
};

// 检查是否有文件夹存在
const exists = (path) => {
  const parts = path.split('/');
  const fileIndex = parts.length - 1;
  return new Promise((resolve) => {
    let currentPath = basePath;
    parts.forEach((partial, index) => {
      // 这个分支用来判断文件夹是否存在
      // 不存在创建
      if (partial && index !== fileIndex) {
        if (fs.existsSync(`${currentPath}/${partial}`)) {
          currentPath = `${currentPath}/${partial}`;
        } else {
          newFolder(`${currentPath}/${partial}`);
          currentPath = `${currentPath}/${partial}`;
        }
      }
    });
    resolve({
      currentPath,
      fileName: parts[fileIndex],
    });
  });
};

// 读取模板内容
const readTemplate = (fileName) => {
  return new Promise((resolve) => {
    const fileContent = [];
    templates.forEach((temp) => {
      let text = fs.readFileSync(`${tempPath}/${temp}`).toString();
      text = text.replace(/name/g, fileName);
      fileContent.push(text);
    });
    resolve(fileContent);
  });
};

// 写入模板内容
const writeFile = (fileName, fileContent, currentPath) => {
  return new Promise((resolve) => {
    const fileList = fs.readdirSync(currentPath);
    const reg = new RegExp(fileName);
    fileList.forEach((file) => {
      if (reg.test(file)) {
        resolve(false);
      }
    });
    templates.forEach(async (temp, index) => {
      const content = fileContent[index];
      await fs.writeFile(`${currentPath}/${temp.replace('name', fileName)}`, content, (err) => {
        if (err) throw err;
      });
    });
    resolve(true);
  });
};

// 处理当前模块的index的导入和导出
const handleCurrentModuleIndex = async (currentPath) => {
  const fileList = fs.readdirSync(currentPath);
  const moduleNameList = [];
  fileList.forEach((file) => {
    const name = file.match(/(.+)\.test\.ts/) && file.match(/(.+)\.test\.ts/)[1];
    if (name) {
      moduleNameList.push(name);
    }
  });

  let text = '';
  const len = moduleNameList.length - 1;
  moduleNameList.forEach((moduleName) => {
    text += `import ${moduleName} from './${moduleName}';\n`;
  });
  text += '\n';
  text += 'export {\n';
  moduleNameList.forEach((moduleName, index) => {
    text += `  ${moduleName},`;
    if (len !== index) {
      text += '\n';
    }
  });
  text += '\n};\n';
  await fs.writeFile(`${currentPath}/index.ts`, text, (err) => {
    if (err) throw err;
    console.log('Generate files successfully');
  });
};

// 实际执行代码
names.forEach(async (name) => {
  try {
    // 这里如果先判断文件是否存在可以提高效率
    // TODO: 后续再改
    const { currentPath, fileName } = await exists(name);
    const fileContent = await readTemplate(fileName);
    const res = await writeFile(fileName, fileContent, currentPath);
    if (res) {
      await handleCurrentModuleIndex(currentPath);
    }
  } catch (e) {
    console.log(e);
  }
});
