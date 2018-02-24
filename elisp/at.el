(defun my-anything ()
    (interactive)
    (anything-other-buffer
        '(
             anything-c-source-buffers
             anything-c-source-recentf
             anything-c-source-global-mark-ring)
        "*my anything*"))
             
        
(setq anything-c-print-test-candidates '("Lisp" "Scheme" "Ruby"))
(defun anything-c-print-test-candidates-function ()
    anything-c-print-test-candidates)
(defvar anything-c-source-print-test
    '(
         (name . "Print Test")
         (candidates . anything-c-print-test-candidates-function)
         (action ("Display Message" . message))))
(anything anything-c-source-print-test)

(defvar anything-c-source-buffers
    '(
         (name . "Buffers")
         (candidates . anything-c-buffer-list)
         (type . command)))
(anything anything-c-source-buffers)
