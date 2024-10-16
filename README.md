> [!CAUTION]
> This library has been [moved here](https://github.com/voiceflow/toolchain/tree/master/libs/git-branch-check).

# git-branch-check
Verify git branch naming convention

## Install
```bash
npm i -D @voiceflow/git-branch-check
```

## Call with husky
```javascript
  "husky": {
    "hooks": {
      "pre-push": "git-branch-check"
    }
  }
```
