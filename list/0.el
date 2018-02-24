(setq moo (cons 1 (cons 2 nil)))
(setq coo (cons 3 (cons 4 nil)))
(cons moo (cons coo nil))
(consp (cons 1 (cons 2 nil)))

'(moo coo)
`(moo coo)
`(,moo ,coo)

(defun Consp (x)
    (null (atom x)))

(Consp 3)
(Consp '(0 1))

(defun Listp (x)
    (cond
        ((null x) t)
        ((consp x) t)
        (t nil)))

(Listp nil)
(Listp '(0 0))
(Listp 3)

(defun Null (x)
    (cond
        (
            (eq x nil)
            t)
        (t
            nil)))

(Null 0)

(Null nil)

(defun factorial (n)
    
