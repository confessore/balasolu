var fs = require('fs')
var getDirName = require('path').dirname

export const getCleanFile = () => {
  const data = fs.readFileSync('terraform/mongo-dev/main.template.tf', {
    encoding: 'utf8',
  })
  return data
}

const instances = 250

export const buildMongoFiles = (resourceName: string, resourcePort: number) => {
  const clean = getCleanFile() as string
  for (var i = 0; i < instances; i++) {
    var text = clean
    var replaced = text.replace(/RESOURCE_NAME/g, `${resourceName}_${i}`)
    replaced = replaced.replace(/RESOURCE_PORT/g, `${resourcePort + i}`)
    const path = `terraform/mongo-dev/main${i}/main${i}.tf`
    writeFile(path, replaced)
  }
}

export const initMongoFiles = () => {
  for (var i = 0; i < instances; i++) {
    const path = `terraform/mongo-dev/main${i}/`
    var exec = require('child_process').exec
    exec(
      `terraform -chdir=${path} init`,
      function (error: string | null, stdout: string, stderr: string) {
        console.log('stdout: ' + stdout)
        console.log('stderr: ' + stderr)
        if (error !== null) {
          console.log('exec error: ' + error)
        }
      }
    )
  }
}

export const applyMongoFiles = () => {
  for (var i = 0; i < instances; i++) {
    const path = `terraform/mongo-dev/main${i}/`
    var exec = require('child_process').exec
    exec(
      `terraform -chdir=${path} apply -auto-approve`,
      function (error: string | null, stdout: string, stderr: string) {
        console.log('stdout: ' + stdout)
        console.log('stderr: ' + stderr)
        if (error !== null) {
          console.log('exec error: ' + error)
        }
      }
    )
  }
}

export const destroyMongoFiles = () => {
  for (var i = 0; i < instances; i++) {
    const path = `terraform/mongo-dev/main${i}/`
    var exec = require('child_process').exec
    exec(
      `terraform -chdir=${path} destroy -auto-approve`,
      function (error: string | null, stdout: string, stderr: string) {
        console.log('stdout: ' + stdout)
        console.log('stderr: ' + stderr)
        if (error !== null) {
          console.log('exec error: ' + error)
        }
      }
    )
  }
}

function writeFile(path: string, contents: string) {
  fs.mkdir(getDirName(path), { recursive: true }, () => {
    fs.writeFileSync(path, contents)
  })
}
