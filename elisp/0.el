(progn 0 1 2 3)
(prog1 0 1 2 3)
(prog2 0 1 2 3)
(progn 0 1 2 (setq a 3))
(prog1 (setq a 0) 1 2 (setq a 3))

(if t
    (progn
        (message "a")
        (message "b"))
    (message "c")
    (message "d"))

    

(if nil
    (progn
        (message "a")
        (message "b"))
    (message "c")
    (message "d"))

    
(cond
    (nil
        (message "a")
        (message "b")))

(when (eq 0 0)
    (message "a")
    (message "b"))
        
(while t
    (message "a"))


(while t
    (setq a (+ a 1))
    (message a))

(let
    (
        (i 0)
        result)
    (while (< i 10)
        (setq result (cons i result))
        (setq i (1+ i)))
    result)

(setf '(j 0) 3)

(let
    (
        (i 0) (1 0))
    i)

(lst '(1 2 3))
