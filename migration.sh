#! /bin/bash

export ENV=${ENV:-dev}
export AWS_DEFAULT_REGION=ap-northeast-2
if [ $ENV = prod ]
then
  export SM_NAME=test
  export SM_VALUES=`aws secretsmanager get-secret-value --secret-id ${SM_NAME}`
elif [ $ENV = dev]
then
  export SM_NAME=test
  export SM_VALUES=`aws secretsmanager get-secret-value --secret-id ${SM_NAME}`
fi

while getopts mr OPTION;
do
    case "${OPTION}" in
        m)
          cmd=run
          ;;
        r)
          cmd=revert
          ;;
    esac
done

npm run migration:${cmd}
