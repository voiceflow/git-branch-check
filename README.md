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
