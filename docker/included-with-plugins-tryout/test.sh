set e+x

echo "Running tests with additional locally installed Cypress plugins"
echo "Note that plugins need to be installed first"
echo "cd src; npm install"

# print the docker command before running
set -x
docker run -t -v $PWD/src:/test -w /test cypress/included:3.8.0
